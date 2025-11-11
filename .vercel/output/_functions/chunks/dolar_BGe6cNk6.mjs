const dolarIcon = new Proxy({"src":"/_astro/dolar.B0uWphz-.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pamplona/Documents/trae_projects/broker-lenders/src/assets/icons/dolar.png";
							}
							
							return target[name];
						}
					});

export { dolarIcon as d };
