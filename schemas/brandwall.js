export default {
	title: 'Brandwall',
	name: 'brandwall',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string'
		},
    {
      title: 'Slides',
      name: 'slides',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [ {
            type: 'caseImage'
          }],
          title: 'Case Images',
          name: 'caseImages'

        }]
    },
		
			{
			title: 'Competences Used',
			name: 'competencesUsed',
			type: 'array',
			of: [
				{	
				type: 'reference',	
				to: [ {
					type: 'competence'
				}],
				title: 'CompetenceS',
				name: 'competencehere'

				}]
		}
	]
}