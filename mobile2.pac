function FindProxyForURL(url, host)
{
    url  = url.toLowerCase();
    host = host.toLowerCase();
 
    if (shExpMatch(url,"*twitter*")  ||
        shExpMatch(url,"*facebook*") ||
        shExpMatch(url,"*fb*") ||
        shExpMatch(url,"*messenger*")) {
            return "PROXY 10.1.0.2:30171; DIRECT";
        };
    
    if (shExpMatch(url,"*youtube*") ||
        shExpMatch(url,"*google*")){
            return "PROXY 10.1.0.2:30171; DIRECT";
        };
        
    if (shExpMatch(url,"*wikipedia*") ||
        shExpMatch(url,"*blogspot*") ||
       ){
        return "PROXY 10.1.0.2:30171; DIRECT";
    }
    return "DIRECT";
}
