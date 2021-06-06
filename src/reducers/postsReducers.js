import React from 'react';
export default (state = ['hello'], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            
            return action.payload;
    
        default:
            return state;
    }
}
