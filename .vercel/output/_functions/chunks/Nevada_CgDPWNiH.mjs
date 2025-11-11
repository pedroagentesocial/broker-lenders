const IdahoImg = new Proxy({"src":"/_astro/Idaho.BQV6Z_7K.jpg","width":1920,"height":1440,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pamplona/Documents/trae_projects/broker-lenders/src/assets/Idaho.jpg";
							}
							
							return target[name];
						}
					});

const ColoradoImg = new Proxy({"src":"/_astro/Colorado.k1I-CuR_.jpg","width":1920,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pamplona/Documents/trae_projects/broker-lenders/src/assets/Colorado.jpg";
							}
							
							return target[name];
						}
					});

const FloridaImg = new Proxy({"src":"/_astro/Florida.BEgmXB8n.jpg","width":1920,"height":1440,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pamplona/Documents/trae_projects/broker-lenders/src/assets/Florida.jpg";
							}
							
							return target[name];
						}
					});

const TexasImg = new Proxy({"src":"/_astro/Texas.CuL_nGSG.jpg","width":1920,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pamplona/Documents/trae_projects/broker-lenders/src/assets/Texas.jpg";
							}
							
							return target[name];
						}
					});

const NevadaImg = new Proxy({"src":"/_astro/Nevada.e961mPv_.jpg","width":640,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pamplona/Documents/trae_projects/broker-lenders/src/assets/Nevada.jpg";
							}
							
							return target[name];
						}
					});

export { ColoradoImg as C, FloridaImg as F, IdahoImg as I, NevadaImg as N, TexasImg as T };
