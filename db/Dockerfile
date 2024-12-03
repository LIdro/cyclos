FROM postgres:15

# Copy initialization scripts
COPY clean_db.sql /docker-entrypoint-initdb.d/01_init.sql
COPY clean_transactions.sql /docker-entrypoint-initdb.d/02_transactions.sql

# Set PostgreSQL configuration for better performance
RUN echo "max_connections = 100" >> /usr/share/postgresql/postgresql.conf.sample
RUN echo "shared_buffers = 128MB" >> /usr/share/postgresql/postgresql.conf.sample
RUN echo "effective_cache_size = 512MB" >> /usr/share/postgresql/postgresql.conf.sample
RUN echo "work_mem = 8MB" >> /usr/share/postgresql/postgresql.conf.sample
RUN echo "maintenance_work_mem = 64MB" >> /usr/share/postgresql/postgresql.conf.sample

EXPOSE 5432
