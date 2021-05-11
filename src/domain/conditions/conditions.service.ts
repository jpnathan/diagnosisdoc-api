import { Injectable } from '@nestjs/common';

@Injectable()
export class ConditionsService {
  getConditions() {
    return new Promise((resolve) => {
      resolve([
        {
          id: 'A09',
          name: 'Infectious gastroenteritis and colitis, unspecified',
        },
        {
          id: 'A64',
          name: 'Unspecified sexually transmitted disease',
        },
        {
          id: 'B300',
          name: 'Keratoconjunctivitis due to adenovirus',
        },
        {
          id: 'B302',
          name: 'Viral pharyngoconjunctivitis',
        },
        {
          id: 'B308',
          name: 'Other viral conjunctivitis',
        },
        {
          id: 'B309',
          name: 'Viral conjunctivitis, unspecified',
        },
        {
          id: 'B373',
          name: 'Candidiasis of vulva and vagina',
        },
        {
          id: 'B9789',
          name:
            'Other viral agents as the cause of diseases classified elsewhere',
        },
        {
          id: 'E860',
          name: 'Dehydration',
        },
        {
          id: 'F340',
          name: 'Cyclothymic disorder',
        },
        {
          id: 'F341',
          name: 'Dysthymic disorder',
        },
        {
          id: 'F39',
          name: 'Unspecified mood [affective] disorder',
        },
        {
          id: 'F411',
          name: 'Generalized anxiety disorder',
        },
        {
          id: 'F418',
          name: 'Other specified anxiety disorders',
        },
        {
          id: 'F419',
          name: 'Anxiety disorder, unspecified',
        },
        {
          id: 'F4321',
          name: 'Adjustment disorder with depressed mood',
        },
        {
          id: 'G43001',
          name:
            'Migraine without aura, not intractable, with status migrainosus',
        },
        {
          id: 'G43009',
          name:
            'Migraine without aura, not intractable, without status migrainosus',
        },
        {
          id: 'G43019',
          name:
            'Migraine without aura, intractable, without status migrainosus',
        },
        {
          id: 'G43501',
          name:
            'Persistent migraine aura without cerebral infarction, not intractable, with status migrainosus',
        },
        {
          id: 'G43509',
          name:
            'Persistent migraine aura without cerebral infarction, not intractable, without status migrainosus',
        },
        {
          id: 'G43519',
          name:
            'Persistent migraine aura without cerebral infarction, intractable, without status migrainosus',
        },
        {
          id: 'G43701',
          name:
            'Chronic migraine without aura, not intractable, with status migrainosus',
        },
        {
          id: 'G43709',
          name:
            'Chronic migraine without aura, not intractable, without status migrainosus',
        },
        {
          id: 'G43711',
          name:
            'Chronic migraine without aura, intractable, with status migrainosus',
        },
        {
          id: 'G43719',
          name:
            'Chronic migraine without aura, intractable, without status migrainosus',
        },
        {
          id: 'G43809',
          name: 'Other migraine, not intractable, without status migrainosus',
        },
        {
          id: 'G43811',
          name: 'Other migraine, intractable, with status migrainosus',
        },
        {
          id: 'G43819',
          name: 'Other migraine, intractable, without status migrainosus',
        },
        {
          id: 'G43829',
          name:
            'Menstrual migraine, not intractable, without status migrainosus',
        },
        {
          id: 'G43909',
          name:
            'Migraine, unspecified, not intractable, without status migrainosus',
        },
        {
          id: 'G43911',
          name: 'Migraine, unspecified, intractable, with status migrainosus',
        },
        {
          id: 'G43919',
          name:
            'Migraine, unspecified, intractable, without status migrainosus',
        },
        {
          id: 'G44209',
          name: 'Tension-type headache, unspecified, not intractable',
        },
        {
          id: 'G44219',
          name: 'Episodic tension-type headache, not intractable',
        },
        {
          id: 'G4700',
          name: 'Insomnia, unspecified',
        },
        {
          id: 'G4701',
          name: 'Insomnia due to medical condition',
        },
        {
          id: 'G5600',
          name: 'Carpal tunnel syndrome, unspecified upper limb',
        },
        {
          id: 'H10029',
          name: 'Other mucopurulent conjunctivitis, unspecified eye',
        },
        {
          id: 'H1033',
          name: 'Unspecified acute conjunctivitis, bilateral',
        },
        {
          id: 'H1044',
          name: 'Vernal conjunctivitis',
        },
        {
          id: 'H1045',
          name: 'Other chronic allergic conjunctivitis',
        },
        {
          id: 'H10509',
          name: 'Unspecified blepharoconjunctivitis, unspecified eye',
        },
        {
          id: 'H10819',
          name: 'Pingueculitis, unspecified eye',
        },
        {
          id: 'H1089',
          name: 'Other conjunctivitis',
        },
        {
          id: 'H109',
          name: 'Unspecified conjunctivitis',
        },
        {
          id: 'H6020',
          name: 'Malignant otitis externa, unspecified ear',
        },
        {
          id: 'H60339',
          name: "Swimmer's ear, unspecified ear",
        },
        {
          id: 'H60399',
          name: 'Other infective otitis externa, unspecified ear',
        },
        {
          id: 'H6500',
          name: 'Acute serous otitis media, unspecified ear',
        },
        {
          id: 'H65119',
          name:
            'Acute and subacute allergic otitis media (mucoid) (sanguinous) (serous), unspecified ear',
        },
        {
          id: 'H65199',
          name: 'Other acute nonsuppurative otitis media, unspecified ear',
        },
        {
          id: 'H6520',
          name: 'Chronic serous otitis media, unspecified ear',
        },
        {
          id: 'H65499',
          name: 'Other chronic nonsuppurative otitis media, unspecified ear',
        },
        {
          id: 'H6590',
          name: 'Unspecified nonsuppurative otitis media, unspecified ear',
        },
        {
          id: 'H66009',
          name:
            'Acute suppurative otitis media without spontaneous rupture of ear drum, unspecified ear',
        },
        {
          id: 'H66019',
          name:
            'Acute suppurative otitis media with spontaneous rupture of ear drum, unspecified ear',
        },
        {
          id: 'H663X9',
          name: 'Other chronic suppurative otitis media, unspecified ear',
        },
        {
          id: 'H6640',
          name: 'Suppurative otitis media, unspecified, unspecified ear',
        },
        {
          id: 'H6690',
          name: 'Otitis media, unspecified, unspecified ear',
        },
        {
          id: 'J00',
          name: 'Acute nasopharyngitis [common cold]',
        },
        {
          id: 'J0100',
          name: 'Acute maxillary sinusitis, unspecified',
        },
        {
          id: 'J0110',
          name: 'Acute frontal sinusitis, unspecified',
        },
        {
          id: 'J0130',
          name: 'Acute sphenoidal sinusitis, unspecified',
        },
        {
          id: 'J0140',
          name: 'Acute pansinusitis, unspecified',
        },
        {
          id: 'J0190',
          name: 'Acute sinusitis, unspecified',
        },
        {
          id: 'J029',
          name: 'Acute pharyngitis, unspecified',
        },
        {
          id: 'J060',
          name: 'Acute laryngopharyngitis',
        },
        {
          id: 'J069',
          name: 'Acute upper respiratory infection, unspecified',
        },
        {
          id: 'J209',
          name: 'Acute bronchitis, unspecified',
        },
        {
          id: 'J301',
          name: 'Allergic rhinitis due to pollen',
        },
        {
          id: 'J3081',
          name: 'Allergic rhinitis due to animal (cat) (dog) hair and dander',
        },
        {
          id: 'J36',
          name: 'Peritonsillar abscess',
        },
        {
          id: 'J40',
          name: 'Bronchitis, not specified as acute or chronic',
        },
        {
          id: 'J411',
          name: 'Mucopurulent chronic bronchitis',
        },
        {
          id: 'J42',
          name: 'Unspecified chronic bronchitis',
        },
        {
          id: 'J45901',
          name: 'Unspecified asthma with (acute) exacerbation',
        },
        {
          id: 'J45902',
          name: 'Unspecified asthma with status asthmaticus',
        },
        {
          id: 'K210',
          name: 'Gastro-esophageal reflux disease with esophagitis',
        },
        {
          id: 'K219',
          name: 'Gastro-esophageal reflux disease without esophagitis',
        },
        {
          id: 'K2900',
          name: 'Acute gastritis without bleeding',
        },
        {
          id: 'K2920',
          name: 'Alcoholic gastritis without bleeding',
        },
        {
          id: 'K2960',
          name: 'Other gastritis without bleeding',
        },
        {
          id: 'K5900',
          name: 'Constipation, unspecified',
        },
        {
          id: 'K5901',
          name: 'Slow transit constipation',
        },
        {
          id: 'K5902',
          name: 'Outlet dysfunction constipation',
        },
        {
          id: 'K649',
          name: 'Unspecified hemorrhoids',
        },
        {
          id: 'K8019',
          name:
            'Calculus of gallbladder with other cholecystitis with obstruction',
        },
        {
          id: 'K8020',
          name:
            'Calculus of gallbladder without cholecystitis without obstruction',
        },
        {
          id: 'K8021',
          name:
            'Calculus of gallbladder without cholecystitis with obstruction',
        },
        {
          id: 'K8042',
          name:
            'Calculus of bile duct with acute cholecystitis without obstruction',
        },
        {
          id: 'K8050',
          name:
            'Calculus of bile duct without cholangitis or cholecystitis without obstruction',
        },
        {
          id: 'K8051',
          name:
            'Calculus of bile duct without cholangitis or cholecystitis with obstruction',
        },
        {
          id: 'L240',
          name: 'Irritant contact dermatitis due to detergents',
        },
        {
          id: 'L242',
          name: 'Irritant contact dermatitis due to solvents',
        },
        {
          id: 'L250',
          name: 'Unspecified contact dermatitis due to cosmetics',
        },
        {
          id: 'L251',
          name:
            'Unspecified contact dermatitis due to drugs in contact with skin',
        },
        {
          id: 'L253',
          name: 'Unspecified contact dermatitis due to other chemical products',
        },
        {
          id: 'L255',
          name: 'Unspecified contact dermatitis due to plants, except food',
        },
        {
          id: 'L259',
          name: 'Unspecified contact dermatitis, unspecified cause',
        },
        {
          id: 'M25539',
          name: 'Pain in unspecified wrist',
        },
        {
          id: 'M5430',
          name: 'Sciatica, unspecified side',
        },
        {
          id: 'N730',
          name: 'Acute parametritis and pelvic cellulitis',
        },
        {
          id: 'N733',
          name: 'Female acute pelvic peritonitis',
        },
        {
          id: 'N739',
          name: 'Female pelvic inflammatory disease, unspecified',
        },
        {
          id: 'N912',
          name: 'Amenorrhea, unspecified',
        },
        {
          id: 'N920',
          name: 'Excessive and frequent menstruation with regular cycle',
        },
        {
          id: 'N921',
          name: 'Excessive and frequent menstruation with irregular cycle',
        },
        {
          id: 'N924',
          name: 'Excessive bleeding in the premenopausal period',
        },
        {
          id: 'N930',
          name: 'Postcoital and contact bleeding',
        },
        {
          id: 'N946',
          name: 'Dysmenorrhea, unspecified',
        },
        {
          id: 'R079',
          name: 'Chest pain, unspecified',
        },
        {
          id: 'R109',
          name: 'Unspecified abdominal pain',
        },
        {
          id: 'R21',
          name: 'Rash and other nonspecific skin eruption',
        },
        {
          id: 'R42',
          name: 'Dizziness and giddiness',
        },
        {
          id: 'S53449A',
          name:
            'Ulnar collateral ligament sprain of unspecified elbow, initial encounter',
        },
        {
          id: 'S63519A',
          name:
            'Sprain of carpal joint of unspecified wrist, initial encounter',
        },
        {
          id: 'S63599A',
          name:
            'Other specified sprain of unspecified wrist, initial encounter',
        },
        {
          id: 'S638X9A',
          name:
            'Sprain of other part of unspecified wrist and hand, initial encounter',
        },
        {
          id: 'S93419A',
          name:
            'Sprain of calcaneofibular ligament of unspecified ankle, initial encounter',
        },
        {
          id: 'S93429A',
          name:
            'Sprain of deltoid ligament of unspecified ankle, initial encounter',
        },
        {
          id: 'S93439A',
          name:
            'Sprain of tibiofibular ligament of unspecified ankle, initial encounter',
        },
      ]);
    });
  }
}
