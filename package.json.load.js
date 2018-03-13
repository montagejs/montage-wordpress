montageDefine("730a65b","package.json",{exports:{name:"wordpress-blog-flow",version:"0.1.0",license:"BSD-3-Clause",repository:{type:"git",url:"git+https://github.com/montagestudio/wordpress-blog-flow.git"},bugs:{url:"https://github.com/montagestudio/wordpress-blog-flow/issues"},homepage:"https://github.com/montagestudio/wordpress-blog-flow#readme",scripts:{lint:"jshint .",build:"mop .",publish:"git checkout gh-pages && git subtree push --prefix dist origin gh-pages",start:"npm run start:app","start:app":"minit serve","start:dist":"minit serve -r dist"},dependencies:{digit:"^3.0.2",montage:"montagejs/montage#master","montage-wordpress":"montagestudio/montage-wordpress#master"},devDependencies:{jshint:"^2.9.5",minit:"^0.5.7","montage-testing":"~0.5.1",mop:"montagejs/mop#master"},excludes:["**/**/mocha.css","dist","builds"],bundle:["ui/main.reel"],main:"index",hash:"730a65b",mappings:{digit:{name:"digit",hash:"e64bb50",location:"packages/digit@e64bb50/"},montage:{name:"montage",hash:"176abc9",location:"packages/montage@176abc9/"},"montage-wordpress":{name:"montage-wordpress",hash:"59e90da",location:"packages/montage-wordpress@59e90da/"}},production:!0,useScriptInjection:!0}});