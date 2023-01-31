import React from 'react';
import st from './Contacts.module.css'

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
                            <div className={st.name}>
                                <input type="text" placeholder="Name"/>
                            </div>
                            <div className={st.email}>
                                <input type="email" placeholder="email"/>
                            </div>
                            <div className={st.placeholder}>
                                <textarea name="text" placeholder="<textarea>" id="" cols={30} rows={10}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className={st.submit}>
                        <input type="submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

