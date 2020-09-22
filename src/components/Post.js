import React from 'react'
const post = {
    "id": 1,
    "description": "Sweet logo!",
    "likes": 20,
    "author": null,
    "created_by": {
        "id": 1,
        "firstname": "rufus",
        "lastname": "mcgillicutty",
        "username": null
    },
    "updated_by": {
        "id": 1,
        "firstname": "rufus",
        "lastname": "mcgillicutty",
        "username": null
    },
    "created_at": "2020-09-22T02:08:59.560Z",
    "updated_at": "2020-09-22T02:08:59.602Z",
    "image": {
        "id": 1,
        "name": "black bg rustHaus logo with text.png",
        "alternativeText": "",
        "caption": "",
        "width": 800,
        "height": 800,
        "formats": {
            "thumbnail": {
                "name": "thumbnail_black bg rustHaus logo with text.png",
                "hash": "thumbnail_black_bg_rust_Haus_logo_with_text_dd7bb1affd",
                "ext": ".png",
                "mime": "image/png",
                "width": 156,
                "height": 156,
                "size": 24.08,
                "path": null,
                "url": "/uploads/thumbnail_black_bg_rust_Haus_logo_with_text_dd7bb1affd.png"
            },
            "medium": {
                "name": "medium_black bg rustHaus logo with text.png",
                "hash": "medium_black_bg_rust_Haus_logo_with_text_dd7bb1affd",
                "ext": ".png",
                "mime": "image/png",
                "width": 750,
                "height": 750,
                "size": 321.21,
                "path": null,
                "url": "/uploads/medium_black_bg_rust_Haus_logo_with_text_dd7bb1affd.png"
            },
            "small": {
                "name": "small_black bg rustHaus logo with text.png",
                "hash": "small_black_bg_rust_Haus_logo_with_text_dd7bb1affd",
                "ext": ".png",
                "mime": "image/png",
                "width": 500,
                "height": 500,
                "size": 161.41,
                "path": null,
                "url": "/uploads/small_black_bg_rust_Haus_logo_with_text_dd7bb1affd.png"
            }
        },
        "hash": "black_bg_rust_Haus_logo_with_text_dd7bb1affd",
        "ext": ".png",
        "mime": "image/png",
        "size": 281.83,
        "url": "/uploads/black_bg_rust_Haus_logo_with_text_dd7bb1affd.png",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "created_by": 1,
        "updated_by": 1,
        "created_at": "2020-09-22T02:08:29.301Z",
        "updated_at": "2020-09-22T02:08:29.343Z"
    }
}

const API_URL = 'http://localhost:1337'
const formatImageUrl = (url) => `${API_URL}${url}`

export default ()=> {
    const url = post.image && post.image.url

    const description = post.description

    const likes = post.likes


    return (
        <div className="Post">
            <img className="Post__Image" src={formatImageUrl(url)} alt=""/>
            <h4>{description}</h4>
            <div>
                <span>Likes: {likes}</span>
            </div>
        </div>

    )
}
