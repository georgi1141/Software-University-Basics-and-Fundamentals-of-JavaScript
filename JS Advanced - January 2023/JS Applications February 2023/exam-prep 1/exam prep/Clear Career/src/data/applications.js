import { post,get } from "./api.js"


const endpoints = {
    applications:'/data/applications',
    byOffer : offerId => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    byOfferIdAndUserId : (offerId,userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`

}

export async function apply(offerId){

    return post(endpoints.applications, {offerId})
}

export async function getApplications(offerId){
    return get(endpoints.byOffer(offerId))
}

export async function getUserApplication(offerId,userId){

    return get(endpoints.byOfferIdAndUserId(offerId,userId))

}