montageDefine("730a65b","ui/header.reel/header.html",{"text":"<!DOCTYPE html><html><head><title></title><style>.Header{position:fixed;top:0;left:0;right:0;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-between;justify-content:space-between;padding:.4rem;background:hsla(0,0%,15%,.4);z-index:100}.Header>*{margin:.4rem}.Header .digit-Title{-webkit-flex:1;flex:1;font-size:1.2em;font-weight:400;color:#fff;text-align:center}.Header-closeButton{line-height:1;font-size:24px;padding:0;width:2em;height:2em;min-width:0;border:none}.Header-closeButton:focus{box-shadow:none}.Header-closeButton.is-hidden{visibility:hidden}</style><script type=text/montage-serialization>{\"owner\":{\"properties\":{\"element\":{\"#\":\"owner\"}}},\"closeButton\":{\"prototype\":\"digit/ui/button.reel\",\"properties\":{\"element\":{\"#\":\"closeButton\"},\"label\":\"×\"},\"bindings\":{\"classList.has('is-hidden')\":{\"<-\":\"!@owner.selectedPost\"}},\"listeners\":[{\"type\":\"action\",\"listener\":{\"@\":\"owner\"}}]},\"logo\":{\"prototype\":\"ui/logo.reel\",\"properties\":{\"element\":{\"#\":\"logo\"}}},\"title\":{\"prototype\":\"digit/ui/title.reel\",\"properties\":{\"element\":{\"#\":\"title\"},\"value\":\"Blog Reader\"}}}</script></head><body><header data-montage-id=owner class=Header><div data-montage-id=logo></div><h1 data-montage-id=title></h1><button data-montage-id=closeButton class=Header-closeButton></button></header></body></html>"})