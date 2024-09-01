function FindProxyForURL(url, host) {
  // 大小写统一
    url  = url.toLowerCase();
    host = host.toLowerCase();
  // 如果是本地地址，不使用代理
    //if (isPlainHostName(host) ||
     //   shExpMatch(host, "localhost.*") ||
     //   isInNet(dnsResolve(host),"10.0.0.0", "255.0.0.0") ||
      //  isInNet(dnsResolve(host),"172.16.0.0", "255.240.0.0") ||
      //  isInNet(dnsResolve(host),"192.168.0.0", "255.255.0.0") ||
     //   isInNet(dnsResolve(host),"127.0.0.0", "255.255.255.0")) {
    //        return "DIRECT";
  //  }


  // 代理地址
    if (shExpMatch(url,"*twitter*") ||
        shExpMatch(url,"*facebook*") ||
        shExpMatch(url,"*fb*") ||
        shExpMatch(url,"*messenger*")) {
            return "PROXY 10.1.0.2:30171; DIRECT";
    }

  // 代理地址
    if (shExpMatch(url,"*youtube*") ||
        shExpMatch(url,"*google*")) {
            return "PROXY 10.1.0.2:30171; DIRECT";
    }
  // 代理地址
    if (shExpMatch(url,"*wikipedia*") ||
        shExpMatch(url,"*blogspot*")) {
            return "PROXY 10.1.0.2:30171; DIRECT";
    }
  // 直链地址
    if (shExpMatch(url,"http://www.google.cn/maps*") ||
        shExpMatch(url,"http://blog.ontrac.com*") ||
        shExpMatch(url,"http://store.sprite.org*") ||
        shExpMatch(url,"http://ime.baidu.jp*")) {
            return "DIRECT";
    }


  // 其他情况，按顺序尝试多个代理，直到成功
 // return "DIRECT; PROXY 10.1.0.2:30171; SOCKS5 10.1.0.2:30170";
   return "DIRECT";
}
