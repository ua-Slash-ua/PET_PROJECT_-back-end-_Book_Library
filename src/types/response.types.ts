export type typeResponse = {
    status: 'success' | 'error'
    statusCode?: 200 | 201 | 400 | 401 | 402 | 403 | 500 | 501
    message: string
    data?: any
}