module.exports = {
	simbolo: 'Na',
	nome: 'Sódio',
numeroAtomico: 11,
familia: {
{
coluna: '1'
},
{
grupo: '1A'
},
{
descritiva: 'Metal alcalino'
}
},
periodo: 2,
numero: {
eletrons: 11,
neutrons: 11,
protons: 11
},
distribuicaoEletronica: {
k: {
s: 2
},
l: {
s: 2, p: 6
},
m: {
s: 1, p: 0, d: 0
},
n: {
s: 0, p: 0, d: 0, f: 0
},
o: {
s: 0, p: 0, d: 0, f: 0
},
p: {
s: 0, p: 0, d: 0
},
q: {
s: 0, p: 0
}
},
propriedades: {
fisicas: {
densidade: {
valor: 0.0899,
unidade: 'kg/m3'
},
estadodaMateria: {
valor: 'gasoso'
},
raioAtomico: {
valor: 53,
unidade: 'pm'
},
massaAtomica: {
valor: 1.00797,
unidade: 'u'
}
},
quimicas: {
meiaVida: require('property-meiavida-h'),
estadoOxidacao: require('property-estado-oxidacao-h'),
estruturaCristalina: require('property-estrutura-cristalina-h'),
eletronegatividadePauling: require('property-eletronegatividade-de-pauling-h'),
pontoFusao: {
valor: 14.025,
unidade: require('unity-k').unidade
},
pontoEbulicao: {
valor: 20.268,
unidade: require('unity-k').unidade
},
energiaIonizacao: {
valor: 1312,
unidade: require('unity-kjXmol-1').unidade
},
raioCovalente: {
valor: 12.3,
unidade: require('unity-pm').unidade
},
raioVanderWaals: {
valor: 120,
unidade: require('unity-pm').unidade
},
entalpiadefusao: {
valor: 0.05868,
unidade: require('unity-kjXmol-1').unidade
},
entalpiadevaporizacao: {
valor: 0.44936,
unidade: require('unity-kjXmol-1').unidade
},
volumeMolar: {
valor: 0.0000114,
unidade: require('unity-kjXmol-1').unidade
},
pressaodeVapor: {
pressao: {
valor: 209,
unidade: require('unity-pa').unidade,
},
temperatura: {
valor: 23,
unidade: require('unity-k').unidade,
}
},
calorEspecífico: {
valor: 14304,
unidade: 'J/(kg·K)'
},
condutividadeEletrica: {
valor: 106,
unidade: 'S/m'
},
condutividadeTermica: {
valor: 0.1815,
unidade: 'W/(m·K)'
}
}
}
}


module.exports = { 
	simbolo: 'Na',
	numeroAtomico: 11, 
	nome: [
		{
			lingua: 'pt-br', 
			valor: 'Sódio'
		}
	], 
	familia: [
		{
			tipo: 'coluna',
			valor: '1'
		}, 
		{
			tipo: 'grupo',
			valor: '1A'
		}, 
		{
			tipo: 'descritivo',
			valor: 'metal alcalino'
		}
	], 
	periodo: 3, 
	massaAtomica: {
		valor: 1.00797,
		unidade: 'u'
	},
	numero: {
		eletrons: 11,
		neutrons: 11,
		protons: 11
	},
	distribuicaoEletronica: {
		1k: [
			{
				subnivel: 's',
				eletrons: 2
			}
		],
		2l: [
			{
				subnivel: 's',
				eletrons: 2, 
				subnivel: 'p',
				eletrons: 6
			}
		],
		3m: [
			{
				subnivel: 's',
				eletrons: 1, 
				subnivel: 'p',
				eletrons: 0,
				subnivel: 'd',
				eletrons: 0
			}
		],
		4n: [
			{
				subnivel: 's',
				eletrons: 0, 
				subnivel: 'p',
				eletrons: 0,
				subnivel: 'd',
				eletrons: 0,
				subnivel: 'f',
				eletrons: 0
			}
		],
		5o: [
			{
				subnivel: 's',
				eletrons: 0, 
				subnivel: 'p',
				eletrons: 0,
				subnivel: 'd',
				eletrons: 0,
				subnivel: 'f',
				eletrons: 0
			}
		],
		6p: [
			{
				subnivel: 's',
				eletrons: 0, 
				subnivel: 'p',
				eletrons: 0,
				subnivel: 'd',
				eletrons: 0
			}
		],
		7q: [
			{
				subnivel: 's',
				eletrons: 0, 
				subnivel: 'p',
				eletrons: 0
			}
		],
	},
	camadaValencia: {
		l: {
				subnivel: 's',
				eletrons: 1
		}
	},
	propriedades: {
		fisicas: [
			{   nome: 'densidade',
				valor: 0.0899, 
				unidade: 'kg/m3'
			},

			{   nome: 'estadodaMateria',
				valor: 'gasoso' 
			},
			{   nome: 'raioAtomico',
				valor: 53,
				unidade: 'pm'
			}
		],
		quimicas:[ 
			{   nome: 'meiaVida',
				valor: 53, 
				unidade: 'd'
			},
			{   nome: 'pontoFusao',
				valor: 1560,
				unidade: 'k'

			},
			{   nome: 'pontoEbulicao'
				valor: 2744,
				unidade: 'k'
			},
			{   nome: 'energiaIonização',
				valor: 899.5, 
				unidade: 'kj/mol'
			},
			{   nome: 'estadoOxidacao',
				valor: '2+' 
			},
			{   nome: 'estruturaCristalina',
				valor: 'hexagonal', 
				imagem: './hexagonal.png'
			},
			{   nome: 'raioCovalente',
				valor: 90, 
				unidade: 'pm'
			},
			{   nome: 'raioVanderWaals',
				valor: 153, 
				unidade: 'pm'
			},
			{   nome: 'entalpiadefusao',
				valor: 12.20, 
				unidade: 'kJ/mol'
			},
			{   nome: 'entalpiadevaporizacao',
				valor: 292.40, 
				unidade: 'kJ/mol'
			},
			{   nome: 'volumeMolar',
				valor: 0.00000485, 
				unidade: 'm3/mol'
			},
			{
				nome: 'pressaodeVapor',
				valor: 1, 
				unidade: 'Pa',
				tipo: 'pressao'
			},
			{
				nome: 'temperaturadeVapor',
				valor: 1462, 
				unidade: 'K',
				tipo: 'temperatura'
			},
			{   nome: 'calorEspecífico',
				valor: 1825, 
				unidade: 'J/(kg·K)'
			},
			{   nome: 'eletronegatividadePauling',
				valor: 1.57, 
				unidade: 'eV'
			},
			{   nome: 'condutividadeEletrica',
				valor: 0, 
				unidade: 'S/m'
			},
			{
				nome: 'condutividadeTermica',
				valor: 201,
				unidade: 'W/(m·K)'
			}
		]	
	}
}

