const loc = document.location.toString();

if (!loc.includes('#')) {
    document.location.replace(loc + '#comment');
}