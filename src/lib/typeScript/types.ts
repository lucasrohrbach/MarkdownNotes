export class Note
{
    id: string;
    title: string;
    content: string;
    created: string;
    modified: string;

    constructor(id:string, title : string, content: string, created: string)
    {
        this.id = id,
        this.title = title;
        this.content = content;
        this.created = created;
    }
}