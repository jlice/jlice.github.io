const tocContainer = document.getElementById('post-toc');
if (tocContainer !== null) {
    const toc = document.getElementById('TableOfContents');
    if (!toc.hasChildNodes()) {
        tocContainer.parentNode.removeChild(tocContainer);
    }
}