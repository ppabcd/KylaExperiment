interface IRequest {
    get(any: string): any

    push(key: string, value: any)

    put(key: string, value: any)

    has(key: string)

    [key: string]: any
}

class Req implements IRequest {
    private requests = new Map<string, any>()

    get(key: string): any {
        return this.requests.get(key)
    }

    push(key: string, value: any) {
        if (this.requests.has(key)) {
            throw new Error(`Key ${key} already exists`)
        }
        this.requests.set(key, value)
        this[key] = value
    }

    put(key: string, value: any) {
        this.requests.set(key, value)
        this[key] = value
    }

    has(key: string) {
        return this.requests.has(key)
    }
}

function middlewareA(request: IRequest, next?: Function) {
    console.log("From middleware A", request)
    request.push("foo", "bar")
    next()
}

function middlewareB(request: IRequest, next?: Function) {
    console.log("From middleware B", request)
    request.push("shouldBeFalse", false)
    next()
}
function middlewareC(request: IRequest, next?: Function) {
    console.log("From middleware C", request)
    if(request.has("shouldBeFalse")){
        if(request.shouldBeFalse == true){
            console.log("This code should not be executed")
            next()
            return
        }
        console.log("The code ended here")
    }
}

function recursiveMiddleware(request: IRequest, number: number) {
    if(number < middleware.length){
        middleware[number](request, () => {
            recursiveMiddleware(request, number + 1)
        })
    }
}

function run() {
    const request = new Req()
    recursiveMiddleware(request, 0)
}

let middleware = [
    middlewareA,
    middlewareB,
    middlewareC
]
run()
