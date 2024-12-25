// src/utils/dataParser.js

export const parseData = async (sourceId, type, collection, fileId) => {
    if (type === "local") {
        try {
            const data = await import(`../constants/translation/Fall/${sourceId}.js`);
            return data.default;
        } catch (error) {
            console.error(`Error loading local data for sourceId ${sourceId}:`, error);
            return [];
        }
    } else if (type === "firebase") {
        try {
            if (fileId) {
                const doc = await firestore.collection(collection).doc(fileId).get();
                if (doc.exists) {
                    return [{ id: doc.id, ...doc.data() }];
                } else {
                    console.warn(`No such document with id ${fileId}`);
                    return [];
                }
            } else {
                const snapshot = await firestore.collection(collection).get();
                return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            }
        } catch (error) {
            console.error(`Error fetching data from Firebase:`, error);
            return [];
        }
    }
    return [];
};