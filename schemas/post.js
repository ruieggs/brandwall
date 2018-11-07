export default {
	title: 'Post',
	name: 'makePost',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text'
		},
		{
			title: 'Author',
			name: 'author',
			type: 'string'
    },
		{
			title: 'Image link',
			name: 'imageLink',
			type: 'string'
		}
	]
}