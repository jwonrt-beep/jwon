(function () {
    if (window.location.protocol !== 'http:') return;

    var host = window.location.hostname;
    var isLocal =
        host === 'localhost' ||
        host === '127.0.0.1' ||
        host === '[::1]' ||
        host.endsWith('.local') ||
        /^192\.168\./.test(host) ||
        /^10\./.test(host);

    if (isLocal) return;

    window.location.replace(
        'https://' + window.location.host + window.location.pathname + window.location.search + window.location.hash
    );
})();
