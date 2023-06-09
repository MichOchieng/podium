import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'circuit',
    title: 'Circuit',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'modelName',
            title: 'Model Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'modelName',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        }),
        defineField({
            name: 'length',
            title: 'Length',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'raceDistance',
            title: 'Race Distance',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'laps',
            title: 'Laps',
            type: 'number',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'lapRecord',
            title: 'Lap Record',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'lapRecordHolder',
            title: 'Lap Record Holder',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'trackThumbnail',
            title: 'Track Thumbnail',
            type: 'image',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'trackLayout',
            title: 'Track Layout',
            type: 'image',
            validation: (rule) => rule.required(),
        }),
    ]
})