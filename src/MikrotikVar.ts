/// All variables from Hotspot environment
export interface IMikrotikHotspotVars {
    mkHotSpotData: MikrotikHotspotData;
}

export class MikrotikHotspotData {
    mkLinks: MikrotikLinks;
    mkCommonVars: MikrotikCommonVars;
    mkClientGeneralInfo: MikrotikGeneralClientInfo;
    mkUserStatusInfo: MikrotikUserStatusInfo;
    mkTrafficCounters: MikrotikTrafficCounters;
    mkMiscVars: MikrotickMiscellaneousVars;

    constructor() {
        this.mkLinks = new MikrotikLinks();
        this.mkCommonVars = new MikrotikCommonVars();
        this.mkClientGeneralInfo = new MikrotikGeneralClientInfo();
        this.mkUserStatusInfo = new MikrotikUserStatusInfo();
        this.mkTrafficCounters = new MikrotikTrafficCounters();
        this.mkMiscVars = new MikrotickMiscellaneousVars();
    }
}

export class MikrotikLinks {
    LinkRedirect: string = "";
    LinkLogin: string = "";
    LinkLoginOnly: string = "";
    LinkOrig: string = "";
    LinkOrigEsc: string = "";
    MacEsc: string = "";
    LinkLogout: string = "";
    LinkStatus: string = "";
    LinkRedirectEsc: string = "";
    LinkAdvert: string = "";
    ServerAddress: string = "";
}

export class MikrotikUserStatusInfo {
    LoginBy: string = "";
    LoginByMac: string = "";
    IdleTimeout: string = "";
    IdleTimeoutSecs: string = "";
    LimitBytesIn: string = "";
    LimitBytesOut: string = "";
    RefreshTimeout: string = "";
    RefreshTimeoutSecs: string = "";
    SessionsTimeout: string = "";
    SessionsTimeoutSecs: string = "";
    SessionsTimeLeft: string = "";
    SessionsTimeLeftSecs: string = "";
    Uptime: string = "";
    UptimeSecs: string = "";
    Blocked: string = "";
}

export class MikrotikTrafficCounters {
    PacketsIn: string = "";
    PacketsOut: string = "";
    BytesIn: string = "";
    BytesOut: string = "";
    RemainBytesIn: string = "";
    RemainBytesOut: string = "";
    BytesInNice: string = "";
    BytesOutNice: string = "";
}

export class MikrotikGeneralClientInfo {
    Domain: string = "";
    InterfaceName: string = "";
    Ip: string = "";
    LoggedIn: string = "";
    Mac: string = "";
    Trial: string = "";
    Username: string = "";
    HostIp: string = "";
    VlanId: string = "";
}

export class MikrotikCommonVars {
    Hostname: string = "";
    Identity: string = "";
    LoginBy: string = "";
    PlainPasswd: string = "";
    ServerAddress: string = "";
    SslLogin: string = "";
    ServerName: string = "";
}

export class MikrotickMiscellaneousVars {
    SessionId: string = "";
    Var: string = "";
    Error: string = "";
    ErrorOrig: string = "";
    ChapId: string = "";
    ChapChallenge: string = "";
    Popup: string = "";
    AdvertPending: string = "";
    HttpStatus: string = "";
    HttpHeader: string = "";
    Blocked: string = "";
}