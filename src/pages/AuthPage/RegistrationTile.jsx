import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { FaPencilAlt } from 'react-icons/fa';
import styles from "./RegistrationTile.module.scss";
import { useSubscription } from '../../contexts/SubscriptionContext';

const RegistrationTile = ({ data, style }) => {
  const { status: contextStatus, endsAt: contextEndsAt } = useSubscription();
  const navigate = useNavigate();
  const { firstName, lastName, email, birthDate, educationRegion, specialty, germanLevel, procedureType } = data;

  return (
    <>
      <div className={styles.tile} style={{ ...style, position: "relative" }}>
        <Link to="/edit-profile" className={styles.editIcon} title="Редагувати профіль">
          <FaPencilAlt />
        </Link>
        <h3 className={styles.tileHeader}>{`${firstName} ${lastName}`}</h3>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Birth Date:</strong> {birthDate}</p>
        <p><strong>Region of Education:</strong> {educationRegion}</p>
        {specialty && <p><strong>Specialty:</strong> {specialty}</p>}
        {germanLevel && <p><strong>German Level:</strong> {germanLevel}</p>}
        {procedureType && <p><strong>Procedure Type:</strong> {procedureType}</p>}
      </div>

      {/* Subscription Action Tile */}
      <div className={styles.tile}>
        <h3 className={styles.tileHeader}>Subscription</h3>
        <p><strong>Status:</strong> {contextStatus}</p>
        {contextEndsAt && (
          <p><strong>Ends At:</strong> {new Date(contextEndsAt).toLocaleDateString()}</p>
        )}
        <div className={styles.buttonContainer}>
          <button
            onClick={() =>
              navigate(
                contextStatus === "active"
                  ? "/dashboard/subscription"
                  : "/subscription"
              )
            }
            className={styles.subscriptionButton}
          >
            {contextStatus === "active" ? "Manage Subscription" : "Subscribe"}
          </button>
        </div>
      </div>
    </>
  );
};

RegistrationTile.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired,
    educationRegion: PropTypes.string.isRequired,
    specialty: PropTypes.string,
    germanLevel: PropTypes.string,
    procedureType: PropTypes.string,
    subscriptionStatus: PropTypes.string,
    subscriptionEnd: PropTypes.string,
  }).isRequired,
  style: PropTypes.object, // Додано підтримку стилів
};

export default RegistrationTile;