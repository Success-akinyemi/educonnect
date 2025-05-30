import { useEffect, useState } from "react";
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL

//FETCH ACN DONATIONS
export function useFetchDonations(query){
    const [ donationData, setDonationData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchDonationData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/acn/donation/getAllDonation`, {withCredentials: true}) : await axios.get(`/acn/donation/getADonation/${query}`, {withCredentials: true})
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setDonationData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setDonationData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setDonationData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchDonationData()
    }, [query])

    return donationData
}

//FETCH ACN DONATIONS
export function useFetchExpense(query){
    const [ expenseData, setExpenseData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchExpenseData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/acn/expense/getAllExpense`, {withCredentials: true}) : await axios.get(`/acn/expense/getAExpense/${query}`, {withCredentials: true})
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setExpenseData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setExpenseData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setExpenseData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchExpenseData()
    }, [query])

    return expenseData
}

//FETCH ACN CONTACT US
export function useFetchContactMessage(query){
    const [ contactUsData, setContactUsData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchContactUsData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/acn/contactUs/getAllContactUs`, {withCredentials: true}) : await axios.get(`/acn/contactUs/getAContactUs/${query}`, {withCredentials: true})
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setContactUsData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setContactUsData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setContactUsData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchContactUsData()
    }, [query])

    return contactUsData
}

//FETCH ACN FAQ
export function useFetchFaq(query){
    const [ faqData, setFaqData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchFaqData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/acn/faq/getAllFaq`, {withCredentials: true}) : await axios.get(`/acn/faq/getAFaq/${query}`, {withCredentials: true})
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setFaqData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setFaqData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setFaqData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchFaqData()
    }, [query])

    return faqData
}

//FETCH ACN NEWS AND UPDATES
export function useFetchNewsAndUpdates(query){
    const [ newsData, setNewsData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/acn/newsAndUpdates/getAllNewsAndUpdates`, {withCredentials: true}) : await axios.get(`/acn/newsAndUpdates/getANewsAndUpdates/${query}`, {withCredentials: true})
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setNewsData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setNewsData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setNewsData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchNewsData()
    }, [query])

    return newsData
}

//FETCH ACN STORIES
export function useFetchStories(query){
    const [ storiesData, setStoriesData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchStoriesData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/acn/story/getAllStories`, {withCredentials: true}) : await axios.get(`/acn/story/getAStory/${query}`, {withCredentials: true})
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setStoriesData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setStoriesData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setStoriesData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchStoriesData()
    }, [query])

    return storiesData
}


//FETCH ACN TEAM MEMBERS
export function useFetchTeamMembers(query){
    const [ teamMemberData, setTeamMemberData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchTeamMemberData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/acn/team/getAdminAllTeam`, {withCredentials: true}) : await axios.get(`/acn/team/getTeam/${query}`, {withCredentials: true})
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setTeamMemberData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setTeamMemberData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setTeamMemberData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchTeamMemberData()
    }, [query])

    return teamMemberData
}

//FETCH ACN AMBASSDOR MEMBERS
export function useFetchAmbassadors(query){
    const [ teamMemberData, setTeamMemberData] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchTeamMemberData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/acn/ambassdor/getAdminAllTeam`, {withCredentials: true}) : await axios.get(`/acn/ambassdor/getTeam/${query}`, {withCredentials: true})
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setTeamMemberData({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setTeamMemberData({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setTeamMemberData({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchTeamMemberData()
    }, [query])

    return teamMemberData
}

//
export function useFetchDonationStats(query){
    const [ donationStats, setDonationStats] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchDonationStats = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/acn/donation/getDonationStats/${query}`, {withCredentials: true}) : await axios.get(`/acn/donation/getDonationStats/${query}`, {withCredentials: true})
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setDonationStats({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setDonationStats({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setDonationStats({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchDonationStats()
    }, [query])

    return donationStats
}