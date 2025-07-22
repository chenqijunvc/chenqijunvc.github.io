#!/bin/bash
# Image Generation Batch Script for PortfolioFuture Blog
# Use this with your preferred AI image generation tool

echo "PortfolioFuture Blog - AI Image Generation Script"
echo "================================================"
echo ""

# Define the prompts array
declare -A prompts

# Machine Learning (07.jpg)
prompts[07]="Professional dark navy background with floating holographic neural network nodes connected by glowing blue lines, financial data streams flowing through the connections, subtle mathematical formulas in the background, modern tech aesthetic, high quality corporate style, 1920x1080, professional photography"

# Quantitative Finance (08.jpg)  
prompts[08]="Professional trading floor aesthetic with multiple holographic financial charts floating in space, complex mathematical equations subtly integrated, color palette of deep blue, gold, and white, high-tech professional atmosphere, cinematic lighting, 1920x1080"

# Data Science (09.jpg)
prompts[09]="Abstract data visualization with flowing information streams, elegant bar charts and scatter plots emerging from digital space, color gradient from dark blue to bright cyan, professional scientific aesthetic, high contrast for text overlay, 1920x1080"

# Investment Strategy (10.jpg)
prompts[10]="Elegant chess board with financial symbols as pieces, strategic positioning concept, dark background with subtle market chart patterns, sophisticated business aesthetic, gold and silver accents, professional photography, 1920x1080"

# Portfolio Management (11.jpg)
prompts[11]="Sophisticated portfolio dashboard with elegant risk-return visualizations, modern interface design showing asset allocation, performance attribution charts, professional navy and white theme, corporate annual report style, 1920x1080"

# Performance Measurement (12.jpg)
prompts[12]="Professional performance analytics dashboard with Sharpe ratio visualizations, sophisticated KPI metrics display, clean modern interface design, excellent for financial analysis theme, high contrast, 1920x1080"

# Risk Management (13.jpg)
prompts[13]="Sophisticated risk assessment visualization with VaR models and stress testing scenarios, professional financial engineering aesthetic, dark background with orange warning accents, cinematic lighting, 1920x1080"

# Organizational Structure (14.jpg)
prompts[14]="Modern corporate organizational chart with clean geometric hierarchy, sophisticated business structure visualization, professional consulting aesthetic with navy and silver, corporate annual report style, 1920x1080"

# Investment Research (15.jpg)
prompts[15]="Professional research environment with sophisticated financial analysis tools, clean academic aesthetic with multiple research charts and data visualizations, professional photography, high contrast for text overlay, 1920x1080"

# IPOs (16.jpg)
prompts[16]="Dynamic IPO launch visualization with ascending stock price charts, sophisticated market debut aesthetic, celebratory yet professional business tone, gold and navy color palette, cinematic lighting, 1920x1080"

# Equity Analysis (17.jpg)
prompts[17]="Sophisticated equity valuation workspace with DCF models, P/E ratios, and fundamental analysis charts, professional investment analyst aesthetic, clean modern interface, high contrast, 1920x1080"

# Long-term Investing (18.jpg)
prompts[18]="Elegant time horizon visualization with compound growth curves, sophisticated wealth building aesthetic, inspirational yet professional tone, deep blue and gold palette, professional photography, 1920x1080"

echo "Generated prompts for 12 new category-specific images:"
echo ""

for i in {07..18}; do
    echo "Image $i.jpg:"
    echo "${prompts[$i]}"
    echo ""
    echo "---"
    echo ""
done

echo "Copy these prompts to your AI image generation tool of choice:"
echo "- Midjourney: /imagine [prompt]"
echo "- DALL-E 3: Paste prompt directly"
echo "- Stable Diffusion: Use as positive prompt"
echo ""
echo "Save generated images as 07.jpg through 18.jpg in the img/posts/ folder"
