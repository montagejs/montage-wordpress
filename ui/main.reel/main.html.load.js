montageDefine("ec0b435","ui/main.reel/main.html",{"text":"<!DOCTYPE html><html><head><meta charset=utf-8><title>Main</title><style>.Main{height:100%}.Flow{position:absolute;top:0;left:0;right:0;bottom:0}.Flow *{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.Flow-item{position:relative;width:500px;height:500px;touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.Flow-item-wrapper{position:absolute;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;width:500px;height:500px;background-color:#000}.Flow-item.selected .Flow-item-wrapper{background-color:transparent;-webkit-animation:displaycard 1s both normal;animation:displaycard 1s both normal}@-webkit-keyframes displaycard{0%{-webkit-transform:translateX(0);transform:translateX(0)}70%{-webkit-transform:translateX(200px);transform:translateX(200px);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:translateX(100px) translateZ(1000px);transform:translateX(100px) translateZ(1000px)}}@keyframes displaycard{0%{-webkit-transform:translateX(0);transform:translateX(0)}70%{-webkit-transform:translateX(200px);transform:translateX(200px);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:translateX(100px) translateZ(1000px);transform:translateX(100px) translateZ(1000px)}}.Main .Post{opacity:0;z-index:0}.Main .Post--revealed{opacity:1;z-index:15;transition:opacity 500ms;transition-delay:800ms}</style><script type=text/montage-serialization>{\"owner\":{\"properties\":{\"element\":{\"#\":\"main\"}}},\"actionEventListener\":{\"prototype\":\"montage/core/event/action-event-listener\",\"properties\":{\"action\":\"clearSelection\",\"handler\":{\"@\":\"postsController\"}},\"_dev\":{\"isHidden\":true}},\"card\":{\"prototype\":\"ui/card.reel\",\"properties\":{\"element\":{\"#\":\"card\"}},\"bindings\":{\"post\":{\"<-\":\"@flow:iteration.object\"}}},\"flow\":{\"prototype\":\"montage/ui/flow.reel\",\"properties\":{\"element\":{\"#\":\"flow\"},\"cameraFov\":50,\"cameraPosition\":[-3.949999999998454,-0.2499999999990905,1655.5749999999966],\"cameraTargetPoint\":[-0.6999999999998181,-10,357.4249999999979],\"contentController\":{\"@\":\"postsController\"},\"flowEditorMetadata\":{\"flowEditorVersion\":0.1,\"shapes\":[{\"type\":\"FlowSpline\",\"name\":\"Spline 1\",\"pathIndex\":0}],\"selected\":0},\"hasElasticScrolling\":true,\"hasSelectedIndexScrolling\":true,\"isSelectionEnabled\":true,\"linearScrollingVector\":[-300,0],\"paths\":[{\"knots\":[{\"previousHandlerPosition\":[],\"nextDensity\":10,\"previousDensity\":10,\"knotPosition\":[-761.8749999999984,-270,691.324999999998],\"rotateX\":0,\"rotateY\":0,\"rotateZ\":0,\"opacity\":1,\"nextHandlerPosition\":[738.1250000000016,-270,-328.675000000002]},{\"knotPosition\":[1937.099999999999,-270,-1316.0499999999993],\"nextHandlerPosition\":[3207.8250000000007,-270,-1461.849999999998],\"previousHandlerPosition\":[666.3749999999973,-270,-1170.2500000000005],\"nextDensity\":10,\"previousDensity\":10,\"rotateX\":0,\"rotateY\":0,\"rotateZ\":0,\"opacity\":1}],\"units\":{\"rotateX\":\"\",\"rotateY\":\"\",\"rotateZ\":\"\",\"opacity\":\"\"},\"headOffset\":1,\"tailOffset\":0}],\"scrollingTransitionDuration\":500,\"scrollingTransitionTimingFunction\":\"ease\",\"scrollVectorX\":true,\"scrollVectorY\":true,\"selectedIndexScrollingOffset\":0}},\"header\":{\"prototype\":\"ui/header.reel\",\"properties\":{\"element\":{\"#\":\"header\"}},\"bindings\":{\"selectedPost\":{\"<-\":\"@postsController.selection.0\"}},\"listeners\":[{\"type\":\"hidePost\",\"useCapture\":false,\"listener\":{\"@\":\"actionEventListener\"}}]},\"post\":{\"prototype\":\"ui/post.reel\",\"properties\":{\"element\":{\"#\":\"post\"}},\"bindings\":{\"classList.has('Post--revealed')\":{\"<-\":\"@postsController.selection.0\"},\"post\":{\"<-\":\"@postsController.selection.0\"}}},\"postsController\":{\"prototype\":\"montage/core/range-controller\",\"bindings\":{\"content\":{\"<-\":\"@owner.posts\"}}},\"wordpressConnector\":{\"prototype\":\"montage-wordpress/core/wordpress-connector\",\"properties\":{\"host\":\"demo.wp-api.org\"}}}</script></head><body><div data-montage-id=main class=Main><header data-montage-id=header></header><div data-montage-id=post id=blog-post></div><div data-montage-id=flow class=Flow><div class=\"Flow-item js-card\"><div class=Flow-item-wrapper><div data-montage-id=card></div></div></div></div></div></body></html>"})