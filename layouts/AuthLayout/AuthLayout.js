import React, {useEffect} from 'react';
import styles from './styles.module.scss'
import { localStorageGet } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { pathList } from "../../routes/path";

const AuthLayout = ({children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorageGet("token", null)

        if (!!token) navigate(pathList.home.path)
    }, [])

    return (
        <div className={styles.authLayout}>
            {children}
        </div>
    );
};

export default AuthLayout;