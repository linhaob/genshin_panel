import { Attribute } from "../../attribute/attribute";
import { Artifact } from "../artifact";
import { ArtifactSet, SET_COUNT } from "../artifact_type";
import { Param } from "../param";

import {default as adventurerApply} from "./adventurer";
import {default as archaicPetraApply} from "./archaic_petra";
import {default as berserkerApply} from "./berserker";
import {default as bloodStainedChivalryApply} from "./bloodstained_chivalry";
import {default as braveHeartApply} from "./brave_heart";
import {default as crimsonWitchApply} from "./crimson_witch";
import {default as defenderWillApply} from "./defender_will";
import {default as exileApply} from "./exile";
import {default as gamblerApply} from "./gambler";
import {default as gladiatorFinaleApply} from "./gladiator_finale";
import {default as instructorApply} from "./instructor";
import {default as lavaWalkerApply} from "./lava_walker";
import {default as luckyDogApply} from "./lucky_dog";
import {default as maidenBelovedApply} from "./maiden_beloved";
import {default as martialArtistApply} from "./martial_artist";
import {default as noblesseObligeApply} from "./noblesse_oblige";
import {default as prayersForDestinyApply} from "./prayers_for_destiny";
import {default as prayersForIlluminationApply} from "./prayers_for_illumination";
import {default as prayersForWisdomApply} from "./prayers_for_wisdom";
import {default as prayersToStringtimeApply} from "./prayers_to_springtime";
import {default as resolutionOfSojournersApply} from "./resolution_of_sojourner";
import {default as retracingBolideApply} from "./retracing_bolide";
import {default as scholarApply} from "./scholar";
import {default as thunderSmootherApply} from "./thunder_smoother";
import {default as thunderingFuryApply} from "./thundering_fury";
import {default as tinyMiracleApply} from "./tiny_miracle";
import {default as travelingDoctorApply} from "./traveling_doctor";
import {default as viridescentVenererApply} from "./viridescent_venerer";
import {default as wandererTroupeApply} from "./wanderer_troupe";


type ApplyFunctionType = ((attribute: Attribute, params: Param) => void) | null;
let applyFunctions: ApplyFunctionType[][] = (Array(SET_COUNT)).fill(null);

applyFunctions["adventurer"] = adventurerApply;
applyFunctions["archaicPetra"] = archaicPetraApply;
applyFunctions["berserker"] = berserkerApply;
applyFunctions["bloodstainedChivalry"] = bloodStainedChivalryApply;
applyFunctions["braveHeart"] = braveHeartApply;
applyFunctions["crimsonWitch"] = crimsonWitchApply;
applyFunctions["defenderWill"] = defenderWillApply;
applyFunctions["exile"] = exileApply;
applyFunctions["gambler"] = gamblerApply;
applyFunctions["gladiatorFinale"] = gladiatorFinaleApply;
applyFunctions["instructor"] = instructorApply;
applyFunctions["lavaWalker"] = lavaWalkerApply;
applyFunctions["luckyDog"] = luckyDogApply;
applyFunctions["maidenBeloved"] = maidenBelovedApply;
applyFunctions["martialArtist"] = martialArtistApply;
applyFunctions["noblesseOblige"] = noblesseObligeApply;
applyFunctions["prayersForDestiny"] = prayersForDestinyApply;
applyFunctions["prayersForIllumination"] = prayersForIlluminationApply;
applyFunctions["prayersForWisdom"] = prayersForWisdomApply;
applyFunctions["prayersToSpringtime"] = prayersToStringtimeApply;
applyFunctions["resolutionOfSojourner"] = resolutionOfSojournersApply;
applyFunctions["retracingBolide"] = retracingBolideApply;
applyFunctions["scholar"] = scholarApply;
applyFunctions["thunderSmoother"] = thunderSmootherApply;
applyFunctions["thunderingFury"] = thunderingFuryApply;
applyFunctions["tinyMiracle"] = tinyMiracleApply;
applyFunctions["travelingDoctor"] = travelingDoctorApply;
applyFunctions["viridescentVenerer"] = viridescentVenererApply;
applyFunctions["wandererTroupe"] = wandererTroupeApply;


export function apply(attribute: Attribute, params: Param, artifacts: Artifact[]) {
    let temp: any = {};

    for (let i = 0; i < artifacts.length; i++) {
        let art = artifacts[i];

        let setName = art.setName;
        if (temp[setName]) {
            temp[setName]++;
        } else {
            temp[setName] = 1;
        }
    }

    for (let key in temp) {
        let count = temp[key];
        // console.log(count);
        while (count > 0) {
            if (applyFunctions[key][count - 1] !== null) {
                applyFunctions[key][count - 1](attribute, params);
            }
            count--;
        }
        // if (count > 0 && count <= 5 && applyFunctions[key][count - 1] !== null) {
        //     applyFunctions[key][count - 1](attribute, params);
        // }
    }
}