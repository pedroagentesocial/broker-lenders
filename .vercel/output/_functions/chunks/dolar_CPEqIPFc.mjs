const dolarIcon = new Proxy({"src":"/_astro/dolar.B0uWphz-.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Admin/Documents/trae/broker-lenders/broker-lenders/src/assets/icons/dolar.png";
							}
							
							return target[name];
						}
					});

export { dolarIcon as d };
