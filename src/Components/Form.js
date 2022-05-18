import React from "react"
const Name = () => {
    const [badgeArray, setbadgeArray] = React.useState([""])
    
    // const badgeElements = badgeArray.map((name, i) => <p key={i}>{name}</p>)
    const badgeElements = badgeArray.map((badge, i) => {
        // if (typeof name === 'string') return (<p key={i}>{name}</p>)
        if (typeof badge === 'object') return (<div key={i}>
            <label><h1>{badge.firstName}'s Badge:</h1></label>
            <p>Name: {badge.firstName + ' ' + badge.lastName}</p>
            <p>Email: {badge.email}</p>
            <p>Phone#:</p>
            <p>Place of Birth: {badge.placeOfBirth}</p>
            <p>Favorite Food: {badge.food}</p>
            <p>About You: {badge.comments}</p>
            </div>)
})
    
  

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        placeOfBirth: "",
        food: "",
        comments: ""
    })

    const handleChange = (event) => {
        const {name, value, type} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
        return name
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setbadgeArray(prevName => {
            return [...prevName, formData]
        })
    }
    
    return (
        <div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <label><h2>Enter Your Info Here!</h2></label>
                    <input 
                        type="text" 
                        placeholder="First Name"
                        className="form--input"
                        name="firstName"
                        onChange={handleChange}
                        value={formData.firstName}
                        required                      
                      />
                    <input 
                        type="text" 
                        placeholder="Last Name"
                        className="form--input"
                        name="lastName"
                        onChange={handleChange}
                        value={formData.lastName}
                        required                      
                      />
                    <input 
                        type="email"
                        placeholder="Email"
                        className="form--input"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        required                    
                    />
                    <input 
                        type="tel"
                        pattern="[0-9]{10}"
                        placeholder="Phone#"
                        className="form--input"
                        name="phone"
                        onChange={handleChange}
                        value={formData.phone}
                        required                    
                    />
                    <input 
                        type="text" 
                        placeholder="Place of Birth"
                        className="form--input"
                        name="placeOfBirth"
                        onChange={handleChange}
                        value={formData.placeOfBirth}
                        required                    
                    />
                     <input 
                        type="text" 
                        placeholder="Favorite Food"
                        className="form--input"
                        name="food"
                        onChange={handleChange}
                        value={formData.food}
                        required                    
                    />
                    <textarea
                        type="text" 
                        placeholder="Tell us about yourself"
                        className="form--textarea"
                        name="comments"
                        onChange={handleChange}
                        value={formData.comments}
                        required                    
                    />
                    <button className="form--submit">Submit</button>
                </form>
                <br />
                <div className="list">
                    <h2>{badgeElements}</h2>
                </div>
            </div>
        </div>
    )
}


export default Name