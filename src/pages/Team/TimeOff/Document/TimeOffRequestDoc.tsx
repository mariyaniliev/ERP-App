import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import WebViewer from "@pdftron/webviewer";

import { calculateTimeOffDays } from "../../../../utils/timeOffsCalc";

import { TimeOff } from "../../../../types/timeoff";

const today = new Date();

const transformDate = (date: string) => {
  const day = date.slice(8, 10);
  const month = date.slice(5, 7);
  const year = date.slice(0, 4);
  return `${day}.${month}.${year}`;
};

const TimeOffRequestDoc = () => {
  const location = useLocation();
  const viewer = useRef(null);

  const timeOffData = location.state as TimeOff | null;

  if (!timeOffData) {
    return null;
  }
  const positions = {
    Developer: "Програмист, софтуерни приложения",
    Manager: "Ръководител",
    HR: "Мениджър човешки ресурси",
    Accountant: "Счетоводител",
  };

  const jsonData = {
    startDate: transformDate(String(timeOffData.startDate)),
    endDate: transformDate(String(timeOffData.endDate)),
    name: timeOffData.name,
    todayDate: `${today.getDate()}.${
      today.getMonth() + 1
    }.${today.getFullYear()}`,
    role: positions[timeOffData.user.position],
  };

  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer",
        initialDoc: "/files/Profile.docx",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer } = instance.Core;

      documentViewer.addEventListener("documentLoaded", async () => {
        await documentViewer.getDocument().documentCompletePromise();
        documentViewer.updateView();
        const daysCount = await calculateTimeOffDays(
          timeOffData.startDate as Date,
          timeOffData.endDate as Date
        );
        await documentViewer
          .getDocument()
          .applyTemplateValues({ ...jsonData, daysCount: String(daysCount) });
      });
    });
  }, []);

  return <div style={{ flex: 1 }} ref={viewer}></div>;
};

export default TimeOffRequestDoc;
