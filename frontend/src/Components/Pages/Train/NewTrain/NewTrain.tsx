//region Preamble
/**
 * SPDX-License-Identifier: MIT
 * Copyright © 2021 Gabriel Rodrigues
 */
//endregion

import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import { NewTrainProvider } from "./Hooks/NewTrainContext";
import { NewTrainContent } from "./NewTrainContent";
import { NewTrainHeader } from "./NewTrainHeader";

const NewTrain: React.FC = () => {
  return (
    <NewTrainProvider>
      <IonPage>
        <IonHeader>
          <NewTrainHeader />
        </IonHeader>
        <IonContent>
          <NewTrainContent />
        </IonContent>
      </IonPage>
    </NewTrainProvider>
  );
};

export default NewTrain;
