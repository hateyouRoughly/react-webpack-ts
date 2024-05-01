import React, { memo, useCallback } from "react";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const Bar = ({
  title,
  info,
  onBack,
}: {
  title?: string;
  info?: string;
  onBack?: () => void;
}) => {

	const navigate = useNavigate();
	
  const _onBack = useCallback(() => {
		navigate(-1);
	}, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center border-top border-bottom">
      <div
        className="col-auto d-flex justify-content-center align-items-center p-3 border-end"
        onClick={onBack ?? _onBack}
      >
        <ArrowBackIos htmlColor="#616161" role="button" />
      </div>
      <div className="col px-3">
        <span className="project_info_text">{title ?? ""}</span>
      </div>
      <div className="col d-flex justify-content-end px-3">
        <span className="autosaved_text">{info ?? ""}</span>
      </div>
    </div>
  );
};

export default memo(Bar);
