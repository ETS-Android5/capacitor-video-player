export declare class VideoPlayer {
    videoEl: HTMLVideoElement;
    private _url;
    private _playerId;
    private _playerContainer;
    private _container;
    private _mode;
    private _width;
    private _height;
    private _zIndex;
    private _initial;
    private _videoType;
    private _videoContainer;
    private _isSupported;
    constructor(mode: string, url: string, playerId: string, container: any, zIndex: number, width?: number, height?: number);
    private initialize;
    private createVideoElement;
    private _setPlayer;
    private _getVideoType;
    private _doHide;
    private _createEvent;
    private _closeFullscreen;
}
