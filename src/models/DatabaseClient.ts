import { Client, Databases } from 'appwrite'

const DEFAULT_ENDPOINT = 'https://cloud.appwrite.io/v1'

interface DatabaseClientOptions {
  projectId: string
  dbId: string
  endpoint?: string
}

class DatabaseClient {
  private db: Databases
  private dbId: string

  constructor(options: DatabaseClientOptions) {
    const { projectId, dbId, endpoint = DEFAULT_ENDPOINT } = options
    const client = new Client()
    client.setEndpoint(endpoint).setProject(projectId)
    this.db = new Databases(client)
    this.dbId = dbId
  }

  async listDocuments(collectionId: string, queries?: string[]) {
    return this.db.listDocuments(this.dbId, collectionId, queries)
  }

  async createDocument(
    collectionId: string,
    documentId: string,
    data: any,
    permissions?: string[]
  ) {
    return this.db.createDocument(
      this.dbId,
      collectionId,
      documentId,
      data,
      permissions
    )
  }

  async getDocument(
    collectionId: string,
    documentId: string,
    queries?: string[]
  ) {
    return this.db.getDocument(this.dbId, collectionId, documentId, queries)
  }

  async updateDocument(
    collectionId: string,
    documentId: string,
    data: any,
    permissions?: string[]
  ) {
    return this.db.updateDocument(
      this.dbId,
      collectionId,
      documentId,
      data,
      permissions
    )
  }

  async deleteDocument(collectionId: string, documentId: string) {
    return this.db.deleteDocument(this.dbId, collectionId, documentId)
  }
}

export default DatabaseClient
