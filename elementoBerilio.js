module.exports = { 
	simbolo: 'Be', 
	nome: [
		{
			lingua: 'pt-br', 
			valor: 'berilio'
		}
	], 
	familia: [
		{
			tipo: 'coluna',
			valor: '02'
		}, 
		{
			tipo: 'grupo',
			valor: '2A'
		}, 
		{
			tipo: 'descritivo',
			valor: 'alcalino-terroso'
		}
	], 
	periodo: 2, 
	massaAtomica: {
		valor: 9.012182,
		unidade: 'u'
	},
	numero: {
		eletrons: 4,
		neutrons: 5,
		protons: 4
	},
	distribuicaoEletronica: {
		k: [
			{
				subnivel: 's',
				eletrons: 2
			}
		],
		l: [
			{
				subnivel: 's',
				eletrons: 2, 
				subnivel: 'p',
				eletrons: 0
			}
		],
		m: [
			{
				subnivel: 's',
				eletrons: 0, 
				subnivel: 'p',
				eletrons: 0,
				subnivel: 'd',
				eletrons: 0
			}
		],
		n: [
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
		o: [
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
		p: [
			{
				subnivel: 's',
				eletrons: 0, 
				subnivel: 'p',
				eletrons: 0,
				subnivel: 'd',
				eletrons: 0
			}
		],
		q: [
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
				eletrons: 2
		}
	},
	propriedades: {
		fisicas: [
			{   nome: 'densidade',
				valor: 1848, 
				unidade: 'kg/m3'
			},

			{   nome: 'estadodaMateria',
				valor: 'solido' 
			},
			{   nome: 'raioAtomico',
				valor: 105,
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




	









