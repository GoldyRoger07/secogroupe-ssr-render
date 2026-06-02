export default async (req, res) => {
    const {reqHandler} = await import("../dist/secogroupe-ssr/server/server.mjs")
    return reqHandler(req, res)
}