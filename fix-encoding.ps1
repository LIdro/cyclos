$encodings = @(
    [System.Text.Encoding]::GetEncoding(1251),  # Windows-1251
    [System.Text.Encoding]::GetEncoding(28595),  # ISO-8859-5
    [System.Text.Encoding]::GetEncoding(866)     # DOS-866
)

$langFiles = Get-ChildItem -Path "web/pages/scripts/calendar/lang" -Filter "calendar-*.js"

foreach ($file in $langFiles) {
    Write-Host "Processing $($file.Name)..."
    $content = [System.IO.File]::ReadAllBytes($file.FullName)
    
    foreach ($srcEncoding in $encodings) {
        try {
            $utf8Content = [System.Text.Encoding]::Convert($srcEncoding, [System.Text.Encoding]::UTF8, $content)
            [System.IO.File]::WriteAllBytes($file.FullName, $utf8Content)
            Write-Host "Successfully converted $($file.Name) from $($srcEncoding.EncodingName) to UTF-8"
            break
        }
        catch {
            Write-Host "Failed to convert with $($srcEncoding.EncodingName)"
            continue
        }
    }
}
