# Stage 1: Build the application
FROM tomcat:9.0-jdk11-openjdk-slim as builder

# Verify Java installation
RUN java -version && \
    echo "JAVA_HOME=$JAVA_HOME"

# Install required packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Remove default webapps
RUN rm -rf /usr/local/tomcat/webapps/*

# Add JAXB dependencies
ADD https://repo1.maven.org/maven2/javax/xml/bind/jaxb-api/2.3.1/jaxb-api-2.3.1.jar /usr/local/tomcat/lib/
ADD https://repo1.maven.org/maven2/com/sun/xml/bind/jaxb-core/2.3.0.1/jaxb-core-2.3.0.1.jar /usr/local/tomcat/lib/
ADD https://repo1.maven.org/maven2/com/sun/xml/bind/jaxb-impl/2.3.1/jaxb-impl-2.3.1.jar /usr/local/tomcat/lib/
ADD https://repo1.maven.org/maven2/javax/activation/activation/1.1.1/activation-1.1.1.jar /usr/local/tomcat/lib/

# Set permissions for JAXB libraries
RUN chmod 644 /usr/local/tomcat/lib/*.jar

# Copy the WAR file to webapps directory
COPY web /usr/local/tomcat/webapps/ROOT

# Copy database configuration
COPY db /usr/local/tomcat/db

# Stage 2: Create the runtime environment
FROM tomcat:9.0-jdk11-openjdk-slim

# Remove default webapps and create necessary directories
RUN rm -rf /usr/local/tomcat/webapps/* && \
    mkdir -p /usr/local/tomcat/temp \
            /usr/local/tomcat/work \
            /usr/local/tomcat/logs \
            /usr/local/tomcat/cyclos && \
    chmod -R 777 /usr/local/tomcat/temp \
                 /usr/local/tomcat/work \
                 /usr/local/tomcat/logs \
                 /usr/local/tomcat/cyclos

# Add JAXB dependencies
ADD https://repo1.maven.org/maven2/javax/xml/bind/jaxb-api/2.3.1/jaxb-api-2.3.1.jar /usr/local/tomcat/lib/
ADD https://repo1.maven.org/maven2/com/sun/xml/bind/jaxb-core/2.3.0.1/jaxb-core-2.3.0.1.jar /usr/local/tomcat/lib/
ADD https://repo1.maven.org/maven2/com/sun/xml/bind/jaxb-impl/2.3.1/jaxb-impl-2.3.1.jar /usr/local/tomcat/lib/
ADD https://repo1.maven.org/maven2/javax/activation/activation/1.1.1/activation-1.1.1.jar /usr/local/tomcat/lib/

# Set permissions for JAXB libraries
RUN chmod 644 /usr/local/tomcat/lib/jaxb-api-2.3.1.jar \
             /usr/local/tomcat/lib/jaxb-core-2.3.0.1.jar \
             /usr/local/tomcat/lib/jaxb-impl-2.3.1.jar \
             /usr/local/tomcat/lib/activation-1.1.1.jar

# Copy the pre-built application
COPY --from=builder /usr/local/tomcat/webapps/ROOT /usr/local/tomcat/webapps/ROOT
COPY --from=builder /usr/local/tomcat/db /usr/local/tomcat/db
COPY --from=builder /usr/local/tomcat/lib/*.jar /usr/local/tomcat/lib/

# Set environment variables
ENV JAVA_OPTS="-Xmx512m -Djava.security.egd=file:/dev/./urandom"
ENV CATALINA_OPTS="-Xmx512m"

EXPOSE 8080

CMD ["catalina.sh", "run"]
