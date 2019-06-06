
function Web(){
    jsPanel.create({

        contentSize: {
            width: function() { return Math.min(730, window.innerWidth*0.9);},
            height: function() { return Math.min(400, window.innerHeight*0.5);}
        },
        position: 'center-top 0 100',
        headerTitle: 'WebBrowser(見れないページあり。)',
        onwindowresize: true,
        content: '<iframe src="https://www.bing.com" style="width: 100%; height: 100%;"></iframe>',
    })
}

function memo(){
    jsPanel.create({

        contentSize: {
            width: function() { return Math.min(730, window.innerWidth*0.9);},
            height: function() { return Math.min(400, window.innerHeight*0.5);}
        },
        position: 'center-top 0 100',
        headerTitle: 'メモ帳',
        onwindowresize: true,
        content: '<iframe src="http://www.drpartners.jp/tools/browser-memocho.htm" style="width: 100%; height: 100%;"></iframe>',
    })

}

function clock(){
    jsPanel.create({

        contentSize: {
            width: function() { return Math.min(730, window.innerWidth*0.9);},
            height: function() { return Math.min(400, window.innerHeight*0.5);}
        },
        position: 'center-top 0 100',
        headerTitle: '時計',
        onwindowresize: true,
        content: '<iframe src="https://digital.onl.jp/" style="width: 100%; height: 100%;"></iframe>',
    })
}

function info(){
    jsPanel.create({

        contentSize: {
            width: function() { return Math.min(730, window.innerWidth*0.9);},
            height: function() { return Math.min(500, window.innerHeight*0.5);}
        },
        position: 'center-top 0 100',
        headerTitle: '情報',
        onwindowresize: true,
        content: '<iframe src="info/info.html" style="width: 100%; height: 100%;"></iframe>',
    })
}

function ide(){
    
        jsPanel.create({
    
            contentSize: {
                width: function() { return Math.min(730, window.innerWidth*0.9);},
                height: function() { return Math.min(500, window.innerHeight*0.5);}
            },
            position: 'center-top 0 100',
            headerTitle: 'Web Html,Css,Js Editor',
            onwindowresize: true,
            content: '<iframe src="https://liveweave.com/" style="width: 100%; height: 100%;"></iframe>',
        })
}

function dot(){

    jsPanel.create({
    
        contentSize: {
            width: function() { return Math.min(730, window.innerWidth*0.9);},
            height: function() { return Math.min(500, window.innerHeight*0.5);}
        },
        position: 'center-top 0 100',
        headerTitle: 'どっと絵',
        onwindowresize: true,
        content: '<iframe src="http://dot-e-nanika.com/" style="width: 100%; height: 100%;"></iframe>',
    })
}

function Calc(){
    jsPanel.create({
    
        contentSize: {
            width: function() { return Math.min(730, window.innerWidth*0.9);},
            height: function() { return Math.min(500, window.innerHeight*0.5);}
        },
        position: 'center-top 0 100',
        headerTitle: '電卓',
        onwindowresize: true,
        content: '<iframe src="http://www.onlinerekenmachine.com/jp/%E9%9B%BB%E5%8D%93" style="width: 100%; height: 100%;"></iframe>',
    })
}

function cal(){
    jsPanel.create({
    
        contentSize: {
            width: function() { return Math.min(730, window.innerWidth*0.9);},
            height: function() { return Math.min(500, window.innerHeight*0.5);}
        },
        position: 'center-top 0 100',
        headerTitle: 'カレンダー',
        onwindowresize: true,
        content: '<iframe src="https://www.himekuricalendar.com/" style="width: 100%; height: 100%;"></iframe>',
    })
}

function md(){
    jsPanel.create({
    
        contentSize: {
            width: function() { return Math.min(730, window.innerWidth*0.9);},
            height: function() { return Math.min(500, window.innerHeight*0.5);}
        },
        position: 'center-top 0 100',
        headerTitle: '.mdエディタ',
        onwindowresize: true,
        content: '<iframe src="https://nekobito.github.io/" style="width: 100%; height: 100%;"></iframe>',
    })
}
