// Enhanced code block functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons to code blocks
    const codeBlocks = document.querySelectorAll('.highlight');
    
    codeBlocks.forEach(function(codeBlock) {
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.textContent = 'Copy';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        
        // Add click handler
        copyButton.addEventListener('click', function() {
            const code = codeBlock.querySelector('pre').textContent;
            
            // Use Clipboard API if available
            if (navigator.clipboard) {
                navigator.clipboard.writeText(code).then(function() {
                    copyButton.textContent = 'Copied!';
                    setTimeout(function() {
                        copyButton.textContent = 'Copy';
                    }, 2000);
                }).catch(function() {
                    fallbackCopyTextToClipboard(code, copyButton);
                });
            } else {
                fallbackCopyTextToClipboard(code, copyButton);
            }
        });
        
        // Insert copy button
        codeBlock.style.position = 'relative';
        codeBlock.appendChild(copyButton);
    });
    
    // Fallback copy function for older browsers
    function fallbackCopyTextToClipboard(text, button) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                button.textContent = 'Copied!';
                setTimeout(function() {
                    button.textContent = 'Copy';
                }, 2000);
            }
        } catch (err) {
            console.error('Copy failed:', err);
            button.textContent = 'Copy failed';
            setTimeout(function() {
                button.textContent = 'Copy';
            }, 2000);
        }
        
        document.body.removeChild(textArea);
    }
    
    // Add language labels based on code content
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(function(highlight) {
        const code = highlight.querySelector('pre').textContent;
        
        // Detect language based on content patterns
        if (code.includes('import pandas') || code.includes('pd.')) {
            highlight.classList.add('language-python');
        } else if (code.includes('SELECT') || code.includes('FROM')) {
            highlight.classList.add('language-sql');
        } else if (code.includes('$') || code.includes('ls ') || code.includes('cd ')) {
            highlight.classList.add('language-bash');
        }
    });
    
    // Add smooth scrolling to code sections
    const codeHeaders = document.querySelectorAll('p strong');
    codeHeaders.forEach(function(header) {
        if (header.textContent.includes('📋') || 
            header.textContent.includes('⚠️') ||
            header.textContent.includes('🔧') ||
            header.textContent.includes('⚡') ||
            header.textContent.includes('🔄') ||
            header.textContent.includes('✅') ||
            header.textContent.includes('❌') ||
            header.textContent.includes('🗂️')) {
            
            header.style.cursor = 'pointer';
            header.addEventListener('click', function() {
                const nextElement = header.parentElement.nextElementSibling;
                if (nextElement && nextElement.classList.contains('highlight')) {
                    nextElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        }
    });
});
