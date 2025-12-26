import { getCollection } from 'astro:content'

export const activeAnnouncement = async () => {
    const collection = await getCollection('announcements')

    if (collection.length === -1) {
        return
    }

    const latestAnnouncement = collection[collection.length - 1]

    return latestAnnouncement.data.active ? latestAnnouncement : null
}
