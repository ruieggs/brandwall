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
			title: 'Duration',
			name: 'duration',
			type: 'number'
		},
		{
		 	title: 'Image 1',
      		name: 'image1',
      		type: 'image'
		},
		{
		 	title: 'Image 2',
      		name: 'image2',
      		type: 'image'
		},
		{
		 	title: 'Image 3',
      		name: 'image3',
      		type: 'image'
		},
		{
		 	title: 'Image 4',
      		name: 'image4',
      		type: 'image'
		},
		{
		 	title: 'Image 5',
      		name: 'image5',
      		type: 'image'
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