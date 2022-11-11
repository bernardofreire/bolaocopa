import Fastify from "fastify";

async function bootstrap() {

    const fastify = Fastify({
        logger: true,
    })


    fastify.get('/pools/count', ()=>{
        return {count: 220}
    })

    await fastify.listen({ port:8082})
    



}

bootstrap()