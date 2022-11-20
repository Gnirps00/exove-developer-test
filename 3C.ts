class INode {
    private id: string;

    public constructor(id: string) {
        this.id = id;
    }

    public getId(): string {
        return this.id;
    }
}

class IEdge {
    private sourceId: string;
    private targetId: string;

    public constructor(source: string, target: string){
        this.sourceId = source;
        this.targetId = target;
    }

    public getSource(): string {
        return this.sourceId;
    }
    public getTarget(): string {
        return this.targetId;
    }
}

class Graph {
    private nodes: INode[];
    private edges: IEdge[];

    public getNodes(): INode[] {
        return this.nodes;
    }
    public getEdges(): IEdge[] {
        return this.edges;
    }

    public addNode(node: INode) {
        this.nodes.push(node);
    }
    public addEdge(source: INode, target: INode) {
        const newEdge = new IEdge(source.getId(), target.getId());
        const reverseEdge = new IEdge(target.getId(), source.getId());
        if(this.nodes.includes(source) && this.nodes.includes(target) && !this.edges.includes(newEdge) && !this.edges.includes(reverseEdge)){
            this.edges.push(newEdge);
        }
    }

    public nofNodes(): Number {
        return this.nodes.length;
    }

    public isCycle(): Boolean {
        return false;
    }

}

