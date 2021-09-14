const URL = 'https://hamsters-585f2-default-rtdb.firebaseio.com/autor'

export default{
    async getAllPosts(){
        let result = await fetch(`${URL}/.json`)
        return await result.json()
    },

    async makePost(someData){
        let result = await fetch(`${URL}/.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(someData)
        })
        return await result.json()
    },

    async getPostById(id){
        let result = await fetch(`${URL}/${id}.json`)
        return await result.json()
    }
}