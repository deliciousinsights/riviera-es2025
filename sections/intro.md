# `whoami`

```js
const christophe = {
  family: { wife: '👩🏻‍🦰 Élodie', sons: ['👦🏻 Maxence', '👦🏻 Elliott'] },
  city: 'Paris, FR',
  company: 'Delicious Insights',
  trainings: ['360° ES', 'Modern Web Apps', 'Node.js', '360° Git'],
  webDevSince: 1995,
  mightBeKnownFor: [
    'Prototype.js',
    'Prototype and Script.aculo.us (“The Bungie Book”)',
    'dotJS',
    'Paris Web',
    'NodeSchool Paris',
  ],
}
```

---
layout: cover
background: /covers/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg
---

# ES2025 ?!

ECMA, TC39, ECMAScript et JavaScript

---

# ECMA and TC39

L'**ECMA** est un organisme international de standardisation
(comme ISO, IETF, W3C ou le WHATWG, notamment)

**ES = ECMAScript**. Le standard officiel pour JavaScript\*

**TC39** = Technical Committee 39. En charge de plusieurs standards :
ECMAScript (ECMA-262), Intl (ECMA-402), JSON (ECMA-404), etc.

<Footnote>

Qui s'avère être, pour les U.S., une marque déposée d'Oracle Corp. Ouais, je sais 🤢
C'est pourquoi la communauté discute régulièrement d'un renommage vers « JS » (ce qui éviterait aussi la confusion RH avec Java).

</Footnote>

---

# Mode d'évolution du langage au TC39

Se réunit tous les deux mois (virtuel, présentiel U.S., etc.)

**Cycle annuel :** gel du périmètre en janvier ou mars, sortie officielle en juin.

“ES6” = ES2015, “ES7” = ES2016, et on dit désormais ES2023, etc.

Tout ça est [transparent et public](https://github.com/tc39).

---

# Les [**5 stades**](https://tc39.github.io/process-document/) du processus au TC39

<table>
  <thead>
    <tr>
      <th>Stade</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr v-click>
      <th><strong>0 Strawman</strong></th>
      <td>« Eh ce serait cool d'avoir un opérateur licorne (🦄) pour… »</td>
    </tr>
    <tr v-click>
      <th><strong>1 Proposal</strong></th>
      <td>Un membre du TC39 devient le « champion » de la propale.  L'aspect général de l'API est calé, et la plupart des _cross-cutting concerns_ sont traités.</td>
    </tr>
    <tr v-click>
      <th><strong>2 Draft</strong></th>
      <td>Le *Spec Text* initial est pondu, et couvre tous les aspects critiques et la sémantique technique.</td>
    </tr>
    <tr v-click>
      <th><strong>3 Candidate</strong></th>
      <td>La spec est finalisée, dûment revue et approuvée. L'API est finalisée, tous les cas à la marge sont traités.</td>
    </tr>
    <tr v-click>
      <th><strong>4 Finished</strong></th>
      <td>Couverture Test262 intégrale, 2+ implémentations natives (souvent v8 et Spidermonkey), retours significatifs de la vraie vie, et imprimatur du *Spec Editor*.  Fera partie du prochain gel de périmètre (janvier/mars) et donc de la version officielle qui suivra.</td>
    </tr>
  </tbody>
</table>
