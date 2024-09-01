function FindProxyForURL(url, host) {
    url  = url.toLowerCase();
    host = host.toLowerCase();

    // 请求包含指定社交媒体或通讯应用的网址将通过代理访问
    if (shExpMatch(url,"*twitter*")  ||
        shExpMatch(url,"*facebook*") ||
        shExpMatch(url,"*fb*") ||
        shExpMatch(url,"*messenger*")) {
            return "PROXY 10.1.0.2:30171; DIRECT";
    }
    
    // 请求包含YouTube或Google的网址将通过代理访问
    if (shExpMatch(url,"*youtube*") ||
        shExpMatch(url,"*ytimg*") ||
        shExpMatch(url,"*google*")) {
            return "PROXY 10.1.0.2:30171; DIRECT";
    }
    
    // 请求包含维基百科或博客网站的网址将通过代理访问
    if (shExpMatch(url,"*wikipedia*") ||
        shExpMatch(url,"*blogspot*")) {
        return "PROXY 10.1.0.2:30171; DIRECT";
    }
    
    // 其他所有请求将直接访问互联网
    return "DIRECT";
}
