import React from 'react';
import st from './Contacts.module.scss'

export const Contacts = () => {

    return (
        <div className={st.blockContacts}>
            <div className={st.containerContacts}>
                <div className={st.blockContactsForm}>
                    <div className={st.blockTitle}>
                        <h2 className={st.itemTitle}>Contacts</h2>
                    </div>
                    <div className={st.blockForm}>
                        <form action="">
                            <input type="text" placeholder="name"/>
                            <input type="email" placeholder="email"/>
                            <textarea name="text" placeholder="textarea"></textarea>
                        </form>
                    </div>
                    <div className={st.submit}>
                        <input type="submit" value="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

