# PowerShell script to download additional blog post images
# Run this script to download curated images for your blog

# Create additional directories for organized images
$postImagesDir = "img\posts"
$additionalDir = "img\posts\additional"

if (!(Test-Path $additionalDir)) {
    New-Item -ItemType Directory -Force -Path $additionalDir
}

Write-Host "Image Download Script for Portfolio Future Blog" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green
Write-Host ""

Write-Host "Recommended image sources for your blog:" -ForegroundColor Yellow
Write-Host ""

Write-Host "1. UNSPLASH (unsplash.com) - High quality, free images" -ForegroundColor Cyan
Write-Host "   Suggested searches:" -ForegroundColor White
Write-Host "   - 'financial data visualization'" -ForegroundColor Gray
Write-Host "   - 'stock market analysis'" -ForegroundColor Gray
Write-Host "   - 'machine learning algorithms'" -ForegroundColor Gray
Write-Host "   - 'investment strategy'" -ForegroundColor Gray
Write-Host "   - 'quantitative finance'" -ForegroundColor Gray
Write-Host ""

Write-Host "2. PEXELS (pexels.com) - Free stock photos" -ForegroundColor Cyan
Write-Host "   Suggested searches:" -ForegroundColor White
Write-Host "   - 'business analytics'" -ForegroundColor Gray
Write-Host "   - 'financial planning'" -ForegroundColor Gray
Write-Host "   - 'data science'" -ForegroundColor Gray
Write-Host "   - 'portfolio management'" -ForegroundColor Gray
Write-Host ""

Write-Host "3. PIXABAY (pixabay.com) - Free images and vectors" -ForegroundColor Cyan
Write-Host "   Suggested searches:" -ForegroundColor White
Write-Host "   - 'charts and graphs'" -ForegroundColor Gray
Write-Host "   - 'financial technology'" -ForegroundColor Gray
Write-Host "   - 'investment research'" -ForegroundColor Gray
Write-Host ""

Write-Host "Download Instructions:" -ForegroundColor Green
Write-Host "1. Visit the recommended sites above" -ForegroundColor White
Write-Host "2. Search for relevant terms" -ForegroundColor White
Write-Host "3. Download images (1920x1080 or larger recommended)" -ForegroundColor White
Write-Host "4. Save them as 07.jpg, 08.jpg, 09.jpg, etc. in the $postImagesDir folder" -ForegroundColor White
Write-Host "5. Optionally, save themed images in $additionalDir" -ForegroundColor White
Write-Host ""

Write-Host "Suggested naming convention:" -ForegroundColor Yellow
Write-Host "07.jpg - Machine Learning theme" -ForegroundColor Gray
Write-Host "08.jpg - Financial Analysis theme" -ForegroundColor Gray
Write-Host "09.jpg - Data Visualization theme" -ForegroundColor Gray
Write-Host "10.jpg - Investment Strategy theme" -ForegroundColor Gray
Write-Host "11.jpg - Portfolio Management theme" -ForegroundColor Gray
Write-Host "12.jpg - Risk Management theme" -ForegroundColor Gray
Write-Host ""

# Create placeholder files with download URLs for reference
$urlList = @"
# Curated Image URLs for Reference
# Copy these URLs and download manually, then rename appropriately

## Finance & Investment Images:
# https://unsplash.com/s/photos/financial-data-visualization
# https://unsplash.com/s/photos/stock-market-analysis
# https://unsplash.com/s/photos/investment-strategy
# https://unsplash.com/s/photos/quantitative-finance

## Machine Learning & Data Science:
# https://unsplash.com/s/photos/machine-learning
# https://unsplash.com/s/photos/data-science
# https://unsplash.com/s/photos/artificial-intelligence
# https://unsplash.com/s/photos/analytics-dashboard

## Business & Strategy:
# https://unsplash.com/s/photos/business-strategy
# https://unsplash.com/s/photos/portfolio-management
# https://unsplash.com/s/photos/financial-planning
# https://unsplash.com/s/photos/market-research

Remember to:
1. Choose images that are at least 1920x1080 pixels
2. Ensure they are free for commercial use
3. Consider the overall aesthetic of your blog
4. Test how they look as background images too
"@

$urlList | Out-File -FilePath "image_download_urls.txt" -Encoding UTF8

Write-Host "Created 'image_download_urls.txt' with helpful links!" -ForegroundColor Green
Write-Host ""
Write-Host "After downloading new images, I can update your auto_image.html to use them!" -ForegroundColor Magenta
