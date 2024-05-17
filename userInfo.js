function createUserProfile(names,modified_names){
    if (names.length !==modified_names.length){
        throw new Error ('Both arrays must have the same length')
    }
    return names.map((namex,index)=>({
        id:index+1,
        originalName:namex,
        modifiedName:modified_names[index]
    }))
}

module.exports={createUserProfile}