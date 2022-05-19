import React from "react"
const Name = () => {
    const [badgeArray, setbadgeArray] = React.useState([])
    
    // const badgeElements = badgeArray.map((name, i) => <p key={i}>{name}</p>)
    const badgeElements = badgeArray.map((badge, i) => {
        const a = badge.phone
        const phoneFormat = `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}- ${a[6]}${a[7]}${a[8]}${a[9]}`
        // if (typeof name === 'string') return (<p key={i}>{name}</p>)
        if (typeof badge === 'object') return (<div key={i}>
            <label><h1>{badge.firstName}'s Badge:</h1></label>
            <p>Name: {badge.firstName + ' ' + badge.lastName}</p>
            <p>Email: {badge.email}</p>
            <p>Phone#: {phoneFormat}</p>
            <p>Place of Birth: {badge.placeOfBirth}</p>
            <p>Favorite Food: {badge.food}</p>
            <p>About You: {badge.comments}</p>
            </div>)
    })
    
    const intState = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        placeOfBirth: "",
        food: "",
        comments: ""
    }

    const [formData, setFormData] = React.useState(intState)

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
        setFormData(intState)
    }

    const SubmitButton = () => {
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.placeOfBirth || !formData.food || !formData.comments) {
            return <button className="form--submit-disabled"disabled>Submit</button>
        } else {
            return <button className="form--submit">Submit</button>
        }
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
                        minLength={3}
                        required                      
                      />
                    <input 
                        type="text" 
                        placeholder="Last Name"
                        className="form--input"
                        name="lastName"
                        onChange={handleChange}
                        value={formData.lastName}
                        minLength={3}
                        required                      
                      />
                    <input 
                        type="email"
                        placeholder="Email"
                        className="form--input"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        minLength={3}
                        required                    
                    />
                    <input 
                        type="tel"
                        pattern="([0-9]{10})"
                        placeholder="Phone#"
                        className="form--input"
                        name="phone"
                        onChange={handleChange}
                        value={formData.phone}
                        minLength={3}
                        required                    
                    />
                    <input 
                        type="text" 
                        placeholder="Place of Birth"
                        className="form--input"
                        name="placeOfBirth"
                        onChange={handleChange}
                        value={formData.placeOfBirth}
                        minLength={3}
                        required                    
                    />
                     <input 
                        type="text" 
                        placeholder="Favorite Food"
                        className="form--input"
                        name="food"
                        onChange={handleChange}
                        value={formData.food}
                        minLength={3}
                        required                    
                    />
                    <input
                        type="text" 
                        placeholder="Tell us about yourself"
                        className="form--comments"
                        name="comments"
                        onChange={handleChange}
                        value={formData.comments}
                        minLength={3}
                        required                    
                    />
                    <SubmitButton />
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